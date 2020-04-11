using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalQuestController : MonoBehaviour
{
    public List<DetectHit> detectHitters;
    public List<KillGoal> deathlisteners;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void TriggerDeathEvent(string entity)
    {
        foreach (KillGoal element in deathlisteners)
        {
            element.OnDeath(entity);   
        }
    }
}
