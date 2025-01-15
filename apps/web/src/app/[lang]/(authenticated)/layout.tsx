import { getShelfs } from '@web/actions/shelves/queries';
import { Sidebar } from '@web/components/(sidebar)/SideBar';

export default async function ShelvesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shelves = await getShelfs();
  if ('error' in shelves) {
    return <div>{shelves.error}</div>;
  }
  return (
    <div className="flex h-full">
      <Sidebar shelves={shelves} />
      <div className="flex-grow bg-base-100">{children}</div>
    </div>
  );
}
