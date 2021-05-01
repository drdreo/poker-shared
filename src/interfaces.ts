export interface PlayerChecked {
    playerID: string;
}

export interface PlayerCalled {
    playerID: string;
}

export interface PlayerFolded {
    playerID: string;
}

export interface PlayerBet {
    playerID: string;
    bet: number;
    maxBet: number;
    type: BetType;
}

export interface PlayerKicked {
    kickedPlayer: string;
}


export enum RoundType {
    Deal = 'Deal',
    Flop = 'Flop',
    Turn = 'Turn',
    River = 'River'
}

export enum BetType {
    SmallBlind,
    BigBlind,
    Bet,
    Raise,
    Call,
    Check,
    AllIn,
    Removed
}

export interface PokerTable {
    name: string;
    started: boolean;
}

export interface HomeInfo {
    tables: PokerTable[];
    players: number;
}

export interface TableResponse {
    name: string;
    players: PlayerOverview[];
    startTime: Date;
    config: DefaultConfig;
}

export interface AdminResponse {
    sockets: any[];
    tables: any[];
    uptime: number;
    lastPlayerAdded: Date;
}

export interface ServerJoined {
    playerID: string;
    table: string;
}

export interface PlayerLeft {
    playerID: string;
}

export interface GameWinners {
    winners: Winner[];
}

export interface PlayerOverview {
    id: string;
    name: string;
    chips: number;
    color: string;
    bet?: Bet;
    cards?: Card[];
    allIn: boolean;
    folded: boolean;
    disconnected: boolean;
    afk: boolean;
    kickVotes: string[];
}

export interface Bet {
    amount: number;
    type: BetType;
}

export interface SidePotPlayer {
    id: string;
    name: string;
    color: string;
    allIn: boolean;
}

export interface SidePot {
    amount: number;
    players: SidePotPlayer[];
}

export type PotType = 'main' | 'sidepot' | string;

export interface SolvedHand {
    // keep track of the player
    playerID: string;

    // All of the cards passed into the hand.
    cardPool: string[];

    // All of the cards involved in the identified hand type.
    cards: string[];

    // Detailed description of the identified hand type (Two Pair, A's & Q's for example).
    descr: string;

    // Type of hand identified (Two Pair for example).
    name: string;

    // Ranking of the hand type (Varies from game to game; 0 being the lowest hand).
    rank: number;
}

export interface Winner {
    id: string;
    name: string;
    allIn: boolean;
    potType: PotType;
    amount: number;
    hand?: SolvedHand;
}

export interface GamePlayersUpdate {
    players: PlayerOverview[];
}

export interface GameCurrentPlayer {
    currentPlayerID: string;
}

export interface GameDealerUpdate {
    dealerPlayerID: string;
}

export interface GameBoardUpdate {
    board: Card[];
}

export interface GamePotUpdate {
    pot: number;
    sidePots: SidePot[];
}

export interface GameRoundUpdate {
    round: any;
}

export interface MaxBetUpdate {
    maxBet: number;
}

export interface Card {
    value: string | number;
    figure: string;
}

export interface PlayerKicked {
    kickedPlayer: string;
}

export interface PokerConfig {
    spectatorsAllowed: boolean;
    isPublic: boolean;
    turn?: {
        time: number;
    };
    chips: number;
    blinds: {
        small: number;
        big: number;
        duration?: number;
    };
    music: boolean;
    table: {
        autoClose: boolean;
        rebuy: boolean;
    };
    players: {
        max: number;
    };
}

export interface DefaultConfig extends PokerConfig {
    afk: {
        delay: number;
    };
    players: {
        min: number;
        max: number;
    };
}
