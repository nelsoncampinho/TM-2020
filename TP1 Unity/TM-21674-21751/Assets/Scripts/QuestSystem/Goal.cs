using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[ExecuteInEditMode]
public class Goal : MonoBehaviour
{
    public int numberNeeded;
    public int numberKilled;
    public bool completed;
    public Text text;

    public void Increment(int amount)
    {
        //Mathf.Min returns the minimum number between two given values
        //This will stop the incrementing of the number of enemies needed to complete the quest when the number killed is equal to the number needed.
        numberKilled = Mathf.Min(numberKilled + 1, numberNeeded); 

        if(numberKilled >= numberNeeded && !completed)
        {
            this.completed = true;
            text.text = "Quest Completed!";
            
            Debug.Log("Goal Completed!");
        }
    }

    private void Start()
    {
        text.text = "";
    }

}
