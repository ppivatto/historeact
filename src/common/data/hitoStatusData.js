const CANCEL = 'CANCELADO';
const FINISH = 'FINALIZADO';
const IN_PROGRESS = 'EN PROGRESO';
const PLANNED = 'PLANEADO';

const statusType = {
    S: FINISH,
    N: CANCEL,
    A: IN_PROGRESS
};

export default statusType;
