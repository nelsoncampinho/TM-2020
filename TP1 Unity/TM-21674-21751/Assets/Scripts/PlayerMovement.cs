using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Animator anim;
    CharacterController controller;

    public float speed = 12f;
    public float rotationSpeed = 80f;
    public float rotation = 0f;
    public float gravity = 8f;
    //public float jumpHeight = 3f;

    public Vector3 moveDirection = Vector3.zero;

    //public Transform groundCheck;
    //public float groundDistance = 0.4f;
    //public LayerMask groundMask;

    //Vector3 velocity;
    //bool isGrounded;

    // Start is called before the first frame update
    void Start()
    {
        controller = GetComponent<CharacterController>();
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        Movement();
        GetInput();
        //isGrounded = Physics.CheckSphere(groundCheck.position, groundDistance, groundMask);

        //if (isGrounded && velocity.y < 0)
        //{
        //    velocity.y = -1f;
        //}

        //Vector3 move = transform.right * x + transform.forward * z;

        //controller.Move(move * speed * Time.deltaTime);
        //if (Input.GetButtonDown("Jump") && isGrounded)
        //{
        //    velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);
        //}
        //velocity.y += gravity * Time.deltaTime;

        //controller.Move(velocity * Time.deltaTime);
    }

    private void Movement()
    {
        if (controller.isGrounded)
        {
            if (Input.GetKey(KeyCode.W))
            {
                if(anim.GetBool ("isAttacking") == true)
                {
                    return;
                }
                else if(anim.GetBool("isAttacking") == false){ 
                    anim.SetBool("isWalking", true);
                    anim.SetInteger("condition", 1);
                    moveDirection = new Vector3(0, 0, 1);
                    moveDirection *= speed * Time.deltaTime;
                    moveDirection = transform.TransformDirection(moveDirection);
                }
            }
            if (Input.GetKeyUp(KeyCode.W))
            {
                anim.SetBool("isWalking", false);
                anim.SetInteger("condition", 0);
                moveDirection = Vector3.zero;
            }
        }
        rotation += Input.GetAxis("Horizontal") * rotationSpeed * Time.deltaTime;
        transform.eulerAngles = new Vector3(0, rotation, 0);
        moveDirection.y -= gravity * Time.deltaTime;

        controller.Move(moveDirection);
    }

    private void GetInput()
    {
        if (controller.isGrounded)
        {
            if (Input.GetMouseButtonDown(0))
            {
                if(anim.GetBool("isWalking")== true){
                    anim.SetBool("isWalking", false);
                    anim.SetInteger("condition", 0);
                }
                if(anim.GetBool("isWalking") == false)
                {
                    Attacking();
                }
                
            }
        }
    }

    private void Attacking()
    {
        StartCoroutine(AttackRoutine());   
    }

    IEnumerator AttackRoutine()
    {
        anim.SetBool("isAttacking", true);
        anim.SetInteger("condition", 2);        
        yield return new WaitForSeconds(1);
        anim.SetBool("isAttacking", false);
        anim.SetInteger("condition", 0);

    }
}
