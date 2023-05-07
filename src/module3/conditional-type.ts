// a type is dependent on another type

type a1 = number;
type a3 = undefined;
type a4 = never;

type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null ? null : a3 extends number ? null : a4 extends null ? null : never;

type Sheikh = {
	wife1: string;
	wife2: string;
}

type A = keyof Sheikh; // 'wife1' | 'wife2'

type CheckProperty<T, K> = T extends keyof Sheikh ? true : false

type CheckWife1 = CheckProperty<Sheikh, 'wife1'>

// check korbe ei sheikh type e wife1 ase kina ? true : false

type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe'

type RemoveBandhubi<T, K> = T extends K ? never : T

type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Rachel'>