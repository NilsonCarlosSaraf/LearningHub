extends CharacterBody2D

const MAX_SPEED = 200

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	var movement = player_movement()
	var direction = movement.normalized()
	
	velocity = direction * MAX_SPEED
	
	move_and_slide()

func player_movement():
	var x_movement = Input.get_action_strength("move_left") - Input.get_action_strength("move_right")
	var y_movement = Input.get_action_strength("move_down") - Input.get_action_strength("move_up")
	
	return Vector2(x_movement, y_movement)
	
