'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
