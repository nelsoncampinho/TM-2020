using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MovingWallDeath : MonoBehaviour
{
    public GameObject player;
    public Animator anim;
    public Slider playerHealth;

    public RespawnManager respawn;

    public void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == player.tag)
        {
            playerHealth.value = 0;
            respawn.RespawnPlayer(player.tag);
        }
    }
}
