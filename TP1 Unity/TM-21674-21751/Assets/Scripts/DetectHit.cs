using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DetectHit : MonoBehaviour
{
    public Slider healthBar;
    Animator anim;
    public string enemy;
    public string player;
    private bool isDead;

    public GlobalQuestController manager;


    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag != enemy) return;

        healthBar.value -= 100;
        if(healthBar.value <= 0)
        {
            if (!isDead)
            {
                manager.TriggerDeathEvent(player);

                anim.SetBool("isDead", true);
                isDead = true;
            }
           
        }
        Debug.Log("Hit");
    }
    // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
        isDead = false;
    }

   

}
