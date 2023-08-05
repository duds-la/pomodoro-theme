export function CountDown () {
    return(
        
        <CoundownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
    </CoundownContainer>
    )
}