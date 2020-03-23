using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Loss : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision) //quando loss(objeto com o script loss) tiver colisão é despoletado
    {
        if (collision.gameObject.CompareTag("ballTag")) //quando bola bate no loss ("ballTag" -> tag da bola)
        {
            GameObject.Find("ball").GetComponent<Ball>().Reset(); //CORRER AS FUNÇÕES NAS SUAS CLASSES (RESET)
            GameObject.Find("gameManagerObj").GetComponent<Manager>().Reset();
            GameObject.Find("player1").GetComponent<Paddle>().Reset();
        }
    }
}
