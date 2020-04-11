using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[ExecuteInEditMode]
public class Goal : MonoBehaviour
{
    public int numberNeeded;
    public int numberKilled;
    public bool completed;

    public void Increment(int amount)
    {
        //Mathf.Min returns the minimum number between two given values
        //This will stop the incrementing of the number of enemies needed to complete the quest when the number killed is equal to the number needed.
        numberKilled = Mathf.Min(numberKilled + 1, numberNeeded); 

        if(numberKilled >= numberNeeded && !completed)
        {
            this.completed = true;
            Debug.Log("Goal Completed!");
        }
    }
}
