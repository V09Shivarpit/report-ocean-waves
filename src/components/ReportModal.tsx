import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/hooks/useLanguage';
import { Upload, MapPin } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    type: string;
    location: string;
    description: string;
    media?: File;
  }) => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
  });
  const [media, setMedia] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    { value: 'tsunami', label: t('tsunami') },
    { value: 'cyclone', label: t('cyclone') },
    { value: 'high-waves', label: t('highWaves') },
    { value: 'oil-spill', label: t('oilSpill') },
    { value: 'algae-bloom', label: t('algaeBloom') },
    { value: 'marine-debris', label: t('marineDebris') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type || !formData.description) return;

    setIsSubmitting(true);
    
    try {
      await onSubmit({
        ...formData,
        media: media || undefined,
      });
      
      // Reset form
      setFormData({ type: '', location: '', description: '' });
      setMedia(null);
      onClose();
    } catch (error) {
      console.error('Error submitting report:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            {t('reportModalTitle')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Type */}
          <div className="space-y-2">
            <Label htmlFor="event-type">{t('reportType')}</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
              <SelectTrigger>
                <SelectValue placeholder={`${t('reportType')}...`} />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border">
                {eventTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location">{t('location')}</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder={`${t('location')}...`}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">{t('description')} *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder={`${t('description')}...`}
              required
              rows={3}
            />
          </div>

          {/* Media Upload */}
          <div className="space-y-2">
            <Label htmlFor="media">{t('mediaUpload')}</Label>
            <div className="flex items-center gap-2">
              <Input
                id="media"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('media')?.click()}
                className="flex-1"
              >
                <Upload className="h-4 w-4 mr-2" />
                {media ? media.name : t('mediaUpload')}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              {t('cancel')}
            </Button>
            <Button
              type="submit"
              variant="ocean"
              className="flex-1"
              disabled={isSubmitting || !formData.type || !formData.description}
            >
              {isSubmitting ? '...' : t('submitReport')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportModal;