import { WorkoutProgramDetails } from './WorkoutProgram/WorkoutProgramDetail';
import WorkoutProgramList from './WorkoutProgram/WorkoutProgramList';

function Home() {
	return (
		<div>
			<h2>This is Home</h2>
			<WorkoutProgramList />
			<WorkoutProgramDetails />
		</div>
	);
}
export default Home;
