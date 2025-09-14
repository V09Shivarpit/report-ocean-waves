import { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, initAuth } from '@/lib/firebase';

export interface HazardReport {
  id: string;
  type: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
}

export const useReports = () => {
  const [reports, setReports] = useState<HazardReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Firebase auth
    initAuth();

    // Create some demo reports for immediate display
    const demoReports: HazardReport[] = [
      {
        id: 'demo-1',
        type: 'High Waves',
        description: 'Unusually high waves reported near Mumbai coast',
        location: 'Mumbai, Maharashtra',
        latitude: 19.0760 + (Math.random() - 0.5) * 0.1,
        longitude: 72.8777 + (Math.random() - 0.5) * 0.1,
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      },
      {
        id: 'demo-2',
        type: 'Algae Bloom',
        description: 'Red algae bloom observed in coastal waters',
        location: 'Kochi, Kerala',
        latitude: 9.9312 + (Math.random() - 0.5) * 0.1,
        longitude: 76.2673 + (Math.random() - 0.5) * 0.1,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      },
      {
        id: 'demo-3',
        type: 'Marine Debris',
        description: 'Plastic debris accumulation reported by fishing community',
        location: 'Chennai, Tamil Nadu',
        latitude: 13.0827 + (Math.random() - 0.5) * 0.1,
        longitude: 80.2707 + (Math.random() - 0.5) * 0.1,
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      },
    ];

    setReports(demoReports);
    setLoading(false);

    // Set up real-time listener (will work in demo mode)
    try {
      const q = query(collection(db, 'reports'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newReports: HazardReport[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          newReports.push({
            id: doc.id,
            type: data.type,
            description: data.description,
            location: data.location,
            latitude: data.latitude,
            longitude: data.longitude,
            timestamp: data.timestamp.toDate(),
          });
        });
        
        // Combine with demo reports
        setReports([...newReports, ...demoReports]);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.log('Firebase not available, using demo data');
    }
  }, []);

  const addReport = async (reportData: {
    type: string;
    location: string;
    description: string;
    media?: File;
  }) => {
    try {
      // Generate random coordinates for demo (in Indian Ocean region)
      const demoCoordinates = {
        latitude: 15 + Math.random() * 10, // Between 15-25 N
        longitude: 70 + Math.random() * 20, // Between 70-90 E
      };

      const newReport: Omit<HazardReport, 'id'> = {
        ...reportData,
        ...demoCoordinates,
        timestamp: new Date(),
      };

      // Try to add to Firebase, fallback to local state
      try {
        const docRef = await addDoc(collection(db, 'reports'), {
          ...newReport,
          timestamp: new Date(),
        });
        console.log('Report added with ID: ', docRef.id);
      } catch (error) {
        console.log('Firebase not available, adding to demo data');
        
        // Add to local state for demo
        const reportWithId: HazardReport = {
          ...newReport,
          id: `demo-${Date.now()}`,
        };
        
        setReports(prev => [reportWithId, ...prev]);
      }

      return true;
    } catch (error) {
      console.error('Error adding report:', error);
      return false;
    }
  };

  return {
    reports,
    loading,
    addReport,
  };
};