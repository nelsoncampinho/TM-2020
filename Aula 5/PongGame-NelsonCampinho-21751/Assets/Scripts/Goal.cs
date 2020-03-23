using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Goal : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision) //quando goal(objeto com o script goal) tiver colisão é despoletado
    {
        if (collision.gameObject.CompareTag("ballTag")) //quando bola bate no goal ("ballTag" -> tag da bola)
        {
            GameObject.Find("gameManagerObj").GetComponent<Manager>().Player1Scored(); //encontrar gameManagerObject e na class manager correr função
        }
    }
}
