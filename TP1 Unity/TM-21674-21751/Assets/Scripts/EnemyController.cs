using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.AI;
public class EnemyController : MonoBehaviour
{
    Animator anim;
    public Transform player;
    private float currentEnemyHealth = 0;
    public Slider healthBar;

    private void Start()
    {
        anim = GetComponent<Animator>();
    }

    private void Update()
    {
        if (healthBar.value <= 0) return;
        if(Vector3.Distance(player.position, this.transform.position) < 10)
        {
            Vector3 direction = player.position - this.transform.position;
            direction.y = 0;

            this.transform.rotation = Quaternion.Slerp(this.transform.rotation, 
                                                        Quaternion.LookRotation(direction), 0.1f);

            anim.SetBool("isIdle", false);
            if (direction.magnitude > 1.5)
            {
                this.transform.Translate(0, 0, 0.12f);
                anim.SetBool("isWalking", true);
                anim.SetBool("isAttacking", false);
            }
            else
            {
                anim.SetBool("isAttacking", true);
                anim.SetBool("isWalking", false);
            }
        }
        else
        {
            anim.SetBool("isIdle", true);
            anim.SetBool("isWalking", false);
            anim.SetBool("isAttacking", false);
        }
    }
}
