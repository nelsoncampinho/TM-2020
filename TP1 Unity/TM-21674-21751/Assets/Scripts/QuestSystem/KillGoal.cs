using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KillGoal : Goal
{
    public string enemyTag;

    private DetectHit detect = new DetectHit();

    public KillGoal(int amountNeeded, string enemyTag, Quest quest)
    {
        numberKilled = 0;
        numberNeeded = amountNeeded;
        completed = false;
        this.quest = quest;
        this.enemyTag = enemyTag;
    }

    public void EnemyKilled(string enemyTag)
    {
        if(this.enemyTag == enemyTag)
        {
            Increment(1);
        }
    }
}
