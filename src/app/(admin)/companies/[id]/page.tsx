// import React from 'react';
// import Header from '@/app/components/Header';
//
// export interface PageProps {
//   params: { id: string };
// }
//
// export default async function Page({ params }: PageProps) {
//   const { id } = await params;
//   return (
//     <>
//       <Header>Company ({id})</Header>
//     </>
//   );
// }

import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}
