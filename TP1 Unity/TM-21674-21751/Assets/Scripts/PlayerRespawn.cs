using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerRespawn : MonoBehaviour
{
    private Vector3 playerRespawn;

    public void SetNewRespawn(Vector3 playerVector)
    {
        this.playerRespawn = playerVector;
    }

    public Vector3 GetVectorPosition()
    {
        return this.playerRespawn;
    }


}
