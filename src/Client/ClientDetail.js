import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router";
import { getWorkoutPrograms, addWorkoutProgramForClient } from '../Helpers/WorkoutProgramsApi';
import { makeStyles } from '@mui/styles';
import { useAuthContext } from "../Context/auth-context";

const useStyles = makeStyles({
    fullwidth:{
        width: '100vw'
    },
    leftColoumn: {
        float: 'left',
        width: '50%',
        height: '100%'
    },
    rightColoumn: {
        float: 'right',
        width: '50%',
        height: '100%'
    },
    programs: {
        padding: '0 20px'
    },
    programItem: {
        textAlign: 'left',
        margin: '8px 0',
        cursor: 'pointer',
        width: '80%',
        border: '1px solid #498787',
        borderRadius: '8px',
        padding: '4px 8px',
        "&:hover": {
            backgroundColor: '#498787',
            color: 'white'
        }
    },
    formItem: {
        textAlign: 'left',
        margin: '4px 0'
    },
    label: {
        marginRight: '8px'
    }
})

function ClientDetail() {
    const location = useLocation();
    const classes = useStyles();
    const client = location.state;
    const [workoutPrograms, setWorkoutPrograms] = useState([]);
    const [newProgramName, setNewProgramName] = useState('');
    const [newProgramDescription, setNewProgramDescription] = useState('');
    const navigate = useNavigate();
    const { tokenPayload, jwtToken } = useAuthContext();

    useEffect(() => {
        async function getPrograms() {
            const programs = await getWorkoutPrograms(jwtToken);
            setWorkoutPrograms(programs);
        }
        getPrograms();
    }, []); 

    function handleProgramName(event){
        setNewProgramName(event.target.value);
    }

    function handleProgramDescription(event){
        setNewProgramDescription(event.target.value);
    }

    async function handleAddWorkoutProgram(event){
        event.preventDefault();

        const workoutProgramRequest = {
            name: newProgramName,
            description: newProgramDescription,
            exercises: [],
            personalTrainerId: tokenPayload.UserId,
            clientId: client.userId
        }
        await addWorkoutProgramForClient(workoutProgramRequest, jwtToken);

        const newPrograms = workoutPrograms;
        newPrograms.push(workoutProgramRequest);
        setWorkoutPrograms(newPrograms);
    }

    function handleClickWorkoutProgram(program){
        navigate(`/workoutPrograms/${program.workoutProgramId}`, { state: program })
    }

    return (
        <div >
            <h2>Client details</h2>
            <p>
                Name: {client.firstName} {client.lastName}
            </p>
            <p>
                Email: {client.email}
            </p>
                <div className={classes.leftColoumn}>
                    <h4>{client.firstName}'s workout programs:</h4>
                    <div className={classes.programs}>
                        {workoutPrograms.map((program) => (
                            <div key={program.workoutProgramId} className={classes.programItem} onClick={() => handleClickWorkoutProgram(program)}>
                                <div>{program.name}</div>
                                <div>{program.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.rightColoumn}>
                    <h4>Add a workout program to {client.firstName}:</h4>
                    <form onSubmit={handleAddWorkoutProgram}>
                        <div className={classes.formItem}>
                            <label className={classes.label}>Name:</label>
                            <input type="text" value={newProgramName} onChange={handleProgramName}/>
                        </div>
                        <div className={classes.formItem}>
                            <label className={classes.label}>Description:</label>
                            <input type="text" value={newProgramDescription} onChange={handleProgramDescription}/>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
        </div>
    )
}

export default ClientDetail;