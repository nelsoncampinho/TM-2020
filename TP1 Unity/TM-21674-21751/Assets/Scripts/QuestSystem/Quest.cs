using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Quest : MonoBehaviour
{
    public string questName;
    public string description;
    public Goal goal;
    public bool completed;

    public virtual void Complete()
    {
        Debug.Log("Quest Completed!");
    }



}
