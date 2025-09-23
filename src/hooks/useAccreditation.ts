import { useState, useCallback } from 'react';
import { mockAccredited, Accredited } from '@/mocks/data';

export const useAccreditation = () => {
  const [accreditedData, setAccreditedData] = useState<Accredited[]>(mockAccredited);

  const updateAccreditationStatus = useCallback((
    accreditedId: string, 
    status: 'approved' | 'rejected', 
    rejectionReason?: string
  ) => {
    setAccreditedData(prev => 
      prev.map(acc => 
        acc.id === accreditedId 
          ? { 
              ...acc, 
              status, 
              rejectionReason: status === 'rejected' ? rejectionReason : undefined 
            }
          : acc
      )
    );
  }, []);

  const getAccreditedByEvent = useCallback((eventId: string) => {
    return accreditedData.filter(acc => acc.eventId === eventId);
  }, [accreditedData]);

  const getAccreditedById = useCallback((accreditedId: string) => {
    return accreditedData.find(acc => acc.id === accreditedId);
  }, [accreditedData]);

  const getEventStats = useCallback((eventId: string) => {
    const eventAccredited = accreditedData.filter(acc => acc.eventId === eventId);
    return {
      total: eventAccredited.length,
      pending: eventAccredited.filter(acc => acc.status === 'pending').length,
      approved: eventAccredited.filter(acc => acc.status === 'approved').length,
      rejected: eventAccredited.filter(acc => acc.status === 'rejected').length
    };
  }, [accreditedData]);

  return {
    accreditedData,
    updateAccreditationStatus,
    getAccreditedByEvent,
    getAccreditedById,
    getEventStats
  };
};