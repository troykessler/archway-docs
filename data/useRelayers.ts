import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { Relayers } from '@/domain';

import { IBCRelayer } from '@/types';

export const useRelayers = async (
  relayerFiles: string[],
  directory = '_IBC'
): Promise<{
  relayers: Ref<IBCRelayer[] | undefined>;
  loading: Ref<boolean>;
}> => {
  const { data: relayers, isLoading } = useQuery({
    queryKey: [{ scope: 'ibc', entity: 'relayers', relayerFiles, directory }],
    queryFn: Relayers.all,
  });

  return {
    relayers,
    loading: isLoading,
  };
};
