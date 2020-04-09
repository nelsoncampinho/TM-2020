using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DetectHit : MonoBehaviour
{
    public Slider healthBar;
    Animator anim;
    public string enemy;
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag != enemy) return;

        healthBar.value -= 20;
        if(healthBar.value <= 0)
        {
            anim.SetBool("isDead", true);
        }
        Debug.Log("Hit");
    }
    // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
