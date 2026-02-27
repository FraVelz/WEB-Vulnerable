import { ProfileClient } from "./ProfileClient";

export const metadata = {
  title: "Mi Perfil",
};

export default function ProfilePage({
  searchParams,
}: {
  searchParams?: { user?: string; note?: string };
}) {
  return (
    <ProfileClient
      userParam={searchParams?.user ?? null}
      noteParam={searchParams?.note ?? null}
    />
  );
}

