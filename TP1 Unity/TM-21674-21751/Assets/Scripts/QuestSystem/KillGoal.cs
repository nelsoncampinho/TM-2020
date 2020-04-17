using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[ExecuteInEditMode]
public class KillGoal : Goal, DeathEventListener
{
    public string enemyTag;

    private DetectHit detect = new DetectHit();

    public KillGoal(int amountNeeded, string enemyTag)
    {
        numberKilled = 0;
        numberNeeded = amountNeeded;
        completed = false;
        this.enemyTag = enemyTag;
    }

    public void OnDeath(string enemyTag)
    {
        Debug.Log(enemyTag);
        if(this.enemyTag == enemyTag)
        {
            Debug.Log("dentro do on death");
            Increment(1);
        }
    }
}
