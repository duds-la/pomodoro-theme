import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
    return(
        <FormContainerer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                    id="task" 
                    list="task-suggestions"  
                    placeholder="Dê um nome a sua tarefa:"
                    disabled={!!activeCycle}
                    {...register('task')}
                    />
                    
                    
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
                    <MinutesAmountInput 
                    type="number" 
                    id="minutesAmount" 
                    placeholder="00" 
                    step={5} min={'5'} max={60}
                    disabled={!!activeCycle}
                    {...register('minutesAmount', {valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>
    );
}