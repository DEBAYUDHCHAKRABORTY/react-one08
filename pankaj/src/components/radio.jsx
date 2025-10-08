 function RadioCity({radio, handleBtn}) {
    return(
        <>
            <input type="radio" name="food" value={radio} onInput={handleBtn} /> City {radio}
        </>
    );
}
export default RadioCity;