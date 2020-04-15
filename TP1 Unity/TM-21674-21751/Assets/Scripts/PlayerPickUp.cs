using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerPickUp : MonoBehaviour
{
    public Slider playerHealth;

    public void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Health"))
        {
            other.gameObject.SetActive(false);
            playerHealth.value += 50;
        }
    }
}
