"use client";

import Loading from "@/components/common/loading";
import { useFetchGraph } from "@/hooks/fetch-graph";
import { useFetchGraphStore } from "@/stores/fetch-graph-store";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useParams();
  const router = useRouter();
  const { setGraphId, isFetched } = useFetchGraphStore();

  useEffect(() => {
    if (params.id) {
      setGraphId(params.id as string);
    }
  }, [params.id, setGraphId]);

  useFetchGraph();

  useEffect(() => {
    if (isFetched) {
      router.push("/");
    }
  }, [isFetched, router]);

  return <Loading />;
}
