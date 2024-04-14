import { ClaimedKeyResponse } from "@/app/contract/contractHooks";
import { api } from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";

function useClaimedKeys() {
  return useQuery(["claimed-keys"], async () => {
    const { data } = await api.get(`claimedKeys`);

    return data?.value?.[0] as ClaimedKeyResponse[] | undefined;
  });
}

export default useClaimedKeys;
