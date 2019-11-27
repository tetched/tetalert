export interface CommissionDataInterface {
  controllerId: string
  bondedSelf: string
  nominatorData: string
  commission: string
  sessionId: string
}

export interface BlockInterface {
  id: string
  blockHash: string
}

export interface ValidatorInterface {
  accountId: string
  commissionData: CommissionDataInterface[]
  currentValidator: boolean
  blocksProduced: BlockInterface[]
  slashes: string[]
  recentlyOnline: boolean
}

// TEMP SOLUTION
export interface NominatorFormattedInterface {
  accountId: string
  stake: string
}

export interface NominatorDataFormattedInterface {
  totalStake: string
  nominatorStake: string
  stakers: NominatorFormattedInterface[]
}

export interface CommissionDataFormattedInterface {
  controllerId: string
  bondedSelf: string
  nominatorData: NominatorDataFormattedInterface
  commission: string
  sessionId: string
}

export interface ValidatorFormattedInterface {
  accountId: string
  commissionData: CommissionDataFormattedInterface[]
  currentValidator: boolean
  blocksProduced: BlockInterface[]
  slashes: string[]
  recentlyOnline: boolean
}
