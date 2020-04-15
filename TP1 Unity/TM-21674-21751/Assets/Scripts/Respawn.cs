using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Respawn : MonoBehaviour
{

    public PlayerRespawn warrior;
    public Transform player;
    public Transform respawnPosition;
    private Vector3 playerNewPosition;

    public void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == this.player.tag)
        {
            playerNewPosition = new Vector3(respawnPosition.position.x, respawnPosition.position.y, respawnPosition.position.z);
            warrior.SetNewRespawn(playerNewPosition);
            Debug.Log("Nova Posição");
        }
    }
    
}
