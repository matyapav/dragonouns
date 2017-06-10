/**
 * Shows "zivotnost" form field
 * @returns {{type: string}}
 */
export function showZivotnost() {
    return {
        type: 'SHOW_ZIVOTNOST'
    }
}

/**
 * HIdes "zivotnost" form field
 * @returns {{type: string}}
 */
export function hideZivotnost() {
    return {
        type: 'HIDE_ZIVOTNOST'
    }
}

/**
 * Sets how many form fields are visible
 * @param count
 * @returns {{type: string, payload: *}}
 */
export function setInputCount(count) {
    return {
        type: 'SET_INPUT_COUNT',
        payload: count
    }
}

/**
 * Resets form
 * @param yesOrNo
 * @returns {{type: string, payload: *}}
 */
export function resetForm(yesOrNo) {
    return {
        type: 'RESET_FORM',
        payload: yesOrNo
    }
}
/**
 * Increases number of correctly answered questions
 * @returns {{type: string}}
 */
export function increaseCorrectCount() {
    return {
        type: 'INC_CORRECT'
    }
}

/**
 * Fills "vzor" select field for "muzsky rod"
 * @returns {{type: string, payload: *[]}}
 */
export function fillVzoryMuzskyRod() {
    return {
        type: 'FILL_VZORY',
        payload: [
            {key: 0, value:"", name:"--Vyberte--"},
            {key: 1, value:"Pán", name:"Pán"},
            {key: 2, value:"Muž", name:"Muž"},
            {key: 3, value:"Hrad", name:"Hrad"},
            {key: 4, value:"Stroj", name:"Stroj"},
            {key: 5, value:"Předseda", name:"Předseda"},
            {key: 6, value:"Soudce", name:"Soudce"}
        ]
    }
}

/**
 * Fills "vzor" select field for "zensky rod"
 * @returns {{type: string, payload: *[]}}
 */
export function fillVzoryZenskyRod() {
    return {
        type: 'FILL_VZORY',
        payload: [
            {key: 0, value:"", name:"--Vyberte--"},
            {key: 1, value:"Žena", name:"Žena"},
            {key: 2, value:"Růže", name:"Růže"},
            {key: 3, value:"Píseň", name:"Píseň"},
            {key: 4, value:"Kost", name:"Kost"}
        ]
    }
}

/**
 * Fills "vzor" select field for "stredni rod"
 * @returns {{type: string, payload: *[]}}
 */
export function fillVzoryStredniRod() {
    return {
        type: 'FILL_VZORY',
        payload: [
            {key: 0, value:"", name:"--Vyberte--"},
            {key: 1, value:"Město", name:"Město"},
            {key: 2, value:"Moře", name:"Moře"},
            {key: 3, value:"Kuře", name:"Kuře"},
            {key: 4, value:"Stavení", name:"Stavení"}
        ]
    }
}