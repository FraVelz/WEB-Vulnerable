"use client";

import { useEffect, useMemo, useState } from "react";

import { InfoCard } from "@/components/common/InfoCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProfileNotes } from "@/components/profile/ProfileNotes";
import { ProfileQuickActions } from "@/components/profile/ProfileQuickActions";
import { ProfileRank } from "@/components/profile/ProfileRank";
import { ProfileSettings } from "@/components/profile/ProfileSettings";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { UserInfo } from "@/components/profile/UserInfo";
import { CTF_FLAGS } from "@/lib/ctf-flags";
import { PROFILE_USERS } from "@/lib/data/profile";

declare global {
  interface Window {
    __LAB_USER__?: {
      email: string;
      role: string;
      internalToken: string;
    };
  }
}

export function ProfileClient({
  userParam,
  noteParam,
}: {
  userParam: string | null;
  noteParam: string | null;
}) {
  const userId = userParam ? parseInt(userParam, 10) : 1;
  const noteId = noteParam ? parseInt(noteParam, 10) : null;
  const currentUserParam = userParam ?? "1";

  const userProfile = PROFILE_USERS[userId] ?? PROFILE_USERS[1];

  const totalFlags = CTF_FLAGS.length;
  const flagIds = useMemo(() => CTF_FLAGS.map((f) => f.id), []);

  const [flagsCaptured, setFlagsCaptured] = useState(0);
  const [rank, setRank] = useState("Principiante");
  const [pointsDisplay, setPointsDisplay] = useState("300");
  const [showPointsFlag, setShowPointsFlag] = useState(false);

  useEffect(() => {
    window.__LAB_USER__ = {
      email: userProfile.email,
      role: userProfile.role,
      internalToken: "FLAG{data_in_markup}",
    };
  }, [userProfile.email, userProfile.role]);

  useEffect(() => {
    function update() {
      let count = 0;
      for (const id of flagIds) {
        const saved = localStorage.getItem("flag-" + id);
        if (saved) count++;
      }
      setFlagsCaptured(count);

      const pct = totalFlags ? (count / totalFlags) * 100 : 0;
      const ranks = ["Principiante", "Avanzado", "Experto", "Maestro"];
      const idx = pct >= 75 ? 3 : pct >= 50 ? 2 : pct >= 25 ? 1 : 0;
      setRank(ranks[idx] ?? "Principiante");

      const points = localStorage.getItem("lab_points");
      const display = points !== null ? points : "300";
      setPointsDisplay(display);
      setShowPointsFlag(points === "hacked");
    }

    update();
    window.addEventListener("storage", update);
    window.addEventListener("flag-completed", update as EventListener);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("flag-completed", update as EventListener);
    };
  }, [flagIds, totalFlags]);

  return (
    <div className="container-lab py-8">
      <PageHeader
        title="Mi Perfil"
        subtitle="Información de tu cuenta y progreso en el laboratorio"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <UserInfo
            username={userProfile.username}
            email={userProfile.email}
            role={userProfile.role}
            joinedAt={userProfile.joinedAt}
            lastLogin={userProfile.lastLogin}
            avatar={undefined}
          />

          <ProfileStats
            flagsCaptured={flagsCaptured}
            totalFlags={totalFlags}
            points={
              Number.isFinite(Number(pointsDisplay)) ? Number(pointsDisplay) : 300
            }
          />

          {showPointsFlag ? (
            <div className="card p-4 border border-amber-500/30 bg-amber-500/10 text-amber-200/90 font-mono text-sm">
              FLAG{"{client_side_points}"}
            </div>
          ) : null}

          <ProfileNotes
            noteId={Number.isFinite(noteId) ? noteId : null}
            currentUserParam={currentUserParam}
          />
        </div>

        <div className="space-y-6">
          <ProfileRank rank={rank} />

          <InfoCard title="Acciones Rápidas">
            <ProfileQuickActions />
          </InfoCard>

          <InfoCard title="Configuración">
            <ProfileSettings />
          </InfoCard>
        </div>
      </div>
    </div>
  );
}

