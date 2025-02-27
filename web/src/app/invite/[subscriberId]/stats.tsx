import { getSubscribersSubscriberIdRankingCount, getSubscribersSubscriberIdRankingClicks, getSubscribersSubscriberIdRankingPosition } from "@/http/api";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

interface StatsProps {
    subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
    const { count: accessCount } = await getSubscribersSubscriberIdRankingClicks(subscriberId)
    const { count: inviteCount } = await getSubscribersSubscriberIdRankingCount(subscriberId)
    const { position: rankingPosition } = await getSubscribersSubscriberIdRankingPosition(subscriberId)

    return(
        <div className="grid gap-3 md:grid-cols-3">
                        <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">{accessCount}</span>
                            <span className="text-sm text-gray-300 text-center leading-none">Acessos ao link</span>

                            <MousePointerClick className="text-purple size-5 absolute top-3 left-3"/>
                        </div>
                        <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">{inviteCount}</span>
                            <span className="text-sm text-gray-300 text-center leading-none">Inscrições feitas</span>

                            <BadgeCheck className="text-purple size-5 absolute top-3 left-3"/>
                        </div>
                        <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">{rankingPosition ? `${rankingPosition}º` : '-'} </span>
                            <span className="text-sm text-gray-300 text-center leading-none">Posição no ranking</span>

                            <Medal className="text-purple size-5 absolute top-3 left-3"/>
                        </div>
                    </div>
    )
}