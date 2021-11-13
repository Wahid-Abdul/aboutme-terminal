const areEqualStrings = (string1, string2) => {
    return string1.replace(/\s/g, "") === string2.replace(/\s/g, "")
}

export {
    areEqualStrings
}