/**
 * Hit dragon action
 * @param hitpoins - damage given
 * @returns {{type: string, payload: {damage: *}}}
 */
export function hitDragon(hitpoins) {
    return{
        type:"HIT_DRAGON",
        payload: {
            damage: hitpoins
        }
    }
}

/**
 * Heal dragon action
 * @param hitpoins - hp restored
 * @returns {{type: string, payload: {heal: *}}}
 */
export function healDragon(hitpoins) {
    return{
        type:"HEAL_DRAGON",
        payload: {
            heal: hitpoins
        }
    }
}

/**
 * Removes hit mark from dragon
 * @returns {{type: string}}
 */
export function removeHitMark() {
    return{
        type: "REMOVE_HIT_MARK"
    }
}

/**
 * Revives dragon
 * @returns {{type: string}}
 */
export function reviveDragon() {
    return{
        type: "REVIVE_DRAGON"
    }
}

/**
 * Rounds dragon hitpoints
 * @returns {{type: string}}
 */
export function roundHitPoints() {
    return{
        type: "ROUND_HITPOINTS"
    }
}