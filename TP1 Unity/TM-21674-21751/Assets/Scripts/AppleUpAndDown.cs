﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AppleUpAndDown : MonoBehaviour
{
    public Transform t;
    private Vector3 cubePosition;

    //adjust this to change speed
float speed = 5f;
//adjust this to change how high it goes
float height = 0.5f;

    private void Awake()
    {
        cubePosition = t.position;
    }

    void Update()
    {
        //get the objects current position and put it in a variable so we can access it later with less code
        Vector3 pos = cubePosition;
        //calculate what the new Y position will be
        float newY = Mathf.Sin(Time.time * speed);
        //set the object's Y to the new calculated Y
        t.position = new Vector3(pos.x, newY, pos.z) * height;
    }
}
