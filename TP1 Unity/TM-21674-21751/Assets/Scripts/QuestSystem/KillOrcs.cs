using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KillOrcs : Quest
{
    private void Awake()
    {
        questName = "Orcs Extinction";
        description = "Kill the orcs that invaded the big tree";
        goal = new KillGoal(2, "Enemy", this);
    }

    public override void Complete()
    {

        base.Complete();
    }
}
