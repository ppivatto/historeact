// @flow
'use strict'
import workStatusData from './workStatusData';
import _ from 'lodash';

export default function processObras(obras) {
    //return 'Cualquiera';
    return  _.transform(obras, process, {});
}

function process(result, obra, key) {
    //TODO: probar con reducer

    return result[key] = {
            ...getObraDescription(obra),
            status: getObraStatus(obra),
            location: getObraLocation(obra),
            hitosID: getHitosIDReference(obra),
            hitos: getHitosByObra(obra)
        }
}

function getObraDescription({nombre, direccion, codigo, tss_base}) {
    return {
        nombre: nombre,
        direccion: direccion,
        codigo: codigo,
        tts: tss_base
    }
}

function getObraStatus({fase}) {
    return workStatusData[fase]
}

function getObraLocation({coordenadas}) {
    //TODO: añadir cuando se defina como usar coordenadas
    return {
        latitude: coordenadas,
        longitude: coordenadas
    }
}

function getHitosIDReference(obra) {
    return Object.keys(obra.hitos).sort()
}

function getHitosByObra(obra) {
    return obra.hitos;
}