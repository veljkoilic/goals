import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoalForm } from "../components/GoalForm";
import {Spinner} from '../components/Spinner'
import { getGoals, reset } from "../features/goals/goalSlice";
import { GoalItem } from "../components/GoalItem";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {goals, isLoading, isError, message} = useSelector(state=>state.goals)
  useEffect(() => {
    if(isError){
      console.log(message)
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getGoals())
    return ()=>{
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch]);
  if(isLoading){
    return <Spinner />
  }
  return (
    <>
      {user && (
        <>
          <section className="heading">
            <h1>Welcome {user.name}</h1>
            <p>Goals Dashboard</p>
          </section>
          <GoalForm />
          <section className="content">
            {goals.length > 0 ? (
                goals.map(goal=>{
                  return <GoalItem key={goal._id} goal = {goal}/>
                })
              ) : (<h3>You havent set any goals.</h3>)}
          </section>
        </>
      )}
    </>
  );
};
