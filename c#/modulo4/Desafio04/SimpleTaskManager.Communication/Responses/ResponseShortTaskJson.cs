﻿using SimpleTaskManager.Communication.Enums;

namespace SimpleTaskManager.Communication.Responses;

public class ResponseShortTaskJson
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public Priority Priority { get; set; }
    public Status? Status { get; set; }

}
