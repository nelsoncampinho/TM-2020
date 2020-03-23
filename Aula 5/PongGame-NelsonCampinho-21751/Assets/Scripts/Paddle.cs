using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle : MonoBehaviour
{
    public float speed; //velocidade
    public Rigidbody2D rb; //ter acesso ao player rigidbody

    private Vector3 startPosition; //guardar posição inicial

    public float movement; //valores da posição do player


    // Sempre que inicia o objeto com este script
    void Start()
    {
        startPosition = transform.position; //primeira posição
    }

    // sempre que existe novo frame
    void Update()
    {
        movement = Input.GetAxisRaw("Vertical"); //retorna o valor do eixo virtual X (Tecla W e S)
        rb.velocity = new Vector2(rb.velocity.x, movement * speed); //definir a velocidade do player
    }

    public void Reset()
    {
        rb.velocity = Vector2.zero; //reset Velocidade
        transform.position = startPosition; //Reset Posição inicial
    }
}
