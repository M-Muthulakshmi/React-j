
export function firstnameValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function lastnameValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function emailValidation(input) {
    return /^.+@.+\..+$/.test(input);
}

export function usernameValidation(input) {
    return /^.+@.+\..+$/.test(input);
}

export function passwordValidation(input) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,30}$/.test(input);
}
export function PlaceNameValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function ShortDescValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function CityValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function SpecialityOfPlaceValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function EntryFeeValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}

export function RatingValidation(input) {
    return /^[A-Za-z0-9\s]{1,50}$/.test(input);
}


