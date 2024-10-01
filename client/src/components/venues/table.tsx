"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useWallet } from "@solana/wallet-adapter-react";
import { GiStaryu } from "react-icons/gi";

export function LeaderTable({ bids }: { bids: any[] }) {
  const wallet = useWallet();
  return (
    <Table className="bg-[#282828]">
      <TableCaption>
        <GiStaryu /> Leader Board
      </TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-transparent ">
          <TableHead className="w-[100px] text-white border border-active">
            User
          </TableHead>
          <TableHead className="text-white border border-active">
            Points
          </TableHead>
          <TableHead className="text-white border border-active">
            Rank
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bids.map(({ user, points }, idx) => (
          <TableRow key={user + points} className="hover:bg-transparent">
            <TableCell className="font-medium border border-active flex gap-2">
              {user}{" "}
              {wallet?.publicKey?.toString() === user ? (
                <p className="text-active">(You)</p>
              ) : (
                ""
              )}
            </TableCell>
            <TableCell className="border border-active">{points}</TableCell>
            <TableCell className="border border-active">{idx + 1}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
