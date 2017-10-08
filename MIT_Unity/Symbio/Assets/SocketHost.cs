﻿using System.Collections;
using UnityEngine;
using SocketIO;
using System.Collections.Generic;
using System;
using System.Text.RegularExpressions;


public class SocketHost : MonoBehaviour {

	private SocketIOComponent socket;

	public void Start() {
        socket = GetComponent<SocketIOComponent>();
	}
    
	public void SendBacteriaPos(Vector2 bacteriaPos, int bacteriaId)
    {
        Dictionary<string, string> enemyPosData = new Dictionary<string, string>();
        enemyPosData["posx"] = bacteriaPos.x.ToString();
        enemyPosData["posy"] = bacteriaPos.y.ToString();
        enemyPosData["id"] = bacteriaId.ToString();
        socket.Emit("BACTERIA_POS", new JSONObject(enemyPosData));

        Debug.Log (bacteriaPos.x + " " + bacteriaPos.y);
    }
}
