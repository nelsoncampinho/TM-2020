using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class RespawnManager : MonoBehaviour
{
    public List<Respawn> respawns;
    public Transform player;
    public PlayerRespawn hisRespawn;
    public Animator anim;
    public Slider playerHealth;

    public void OnTriggerEnter(Collider other)
    {
        foreach(Respawn element in respawns)
        {
            element.OnTriggerEnter(other);
        }
    }

    public void RespawnAfterDeath()
    {
        Debug.Log("Here");
        Vector3 vector3 = hisRespawn.GetVectorPosition();
        PlacePlayerRespawn(vector3);
    }

    private void PlacePlayerRespawn(Vector3 vector3)
    {
        Debug.Log("hereRespawn");
        Debug.Log(vector3);
        player.transform.position = vector3;
        RevivePlayer();
    }

    private void RevivePlayer()
    {
        anim.SetBool("isDead", false);
        playerHealth.value = 1000;
        return;
    }
}
