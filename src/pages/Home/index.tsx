import { Play } from "phosphor-react";
import { CoundownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" list="task-suggestions"  placeholder="Dê um nome a sua tarefa:"/>
                    <datalist id="task-suggestions">
                        <option value="Projeto 1"></option>
                    </datalist>
                    <datalist id="task-suggestions">
                        <option value="Projeto 2"></option>
                    </datalist>
                    <datalist id="task-suggestions">
                        <option value="Projeto 3"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={'5'} max={60}/>

                    <span>minutos.</span>
                </FormContainer>


                <CoundownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CoundownContainer>

                <StartCountdownButton type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    );
}