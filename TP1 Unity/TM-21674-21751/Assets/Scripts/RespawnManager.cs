using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class RespawnManager : MonoBehaviour
{
    public Transform player;
    public Transform respawnPosition;
    private Vector3 playerNewPosition;
    public Animator anim;
    public Slider playerHealth;

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == this.player.tag)
        {
            playerNewPosition= new Vector3(respawnPosition.position.x, respawnPosition.position.y, respawnPosition.position.z);
            Debug.Log("Nova Posição");
        }
    }

    public void RespawnPlayer(string player)
    {
        this.player.transform.position = playerNewPosition;
        RevivePlayer();
    }

    private void RevivePlayer()
    {
        anim.SetBool("isDead", false);
        playerHealth.value = 1000;
        return;
    }
}
